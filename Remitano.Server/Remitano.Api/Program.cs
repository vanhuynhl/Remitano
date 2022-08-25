using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Remitano.Api.DbContext;
using Remitano.Api.Repository;
using Remitano.Api.Repository.IRepository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// We use sql server in memory for quick deployment
// builder.Services.AddDbContext<RemitanoContext>(otp => otp.UseSqlServer(builder.Configuration.GetConnectionString("ConStr")));
builder.Services.AddDbContext<RemitanoContext>(opt => opt.UseInMemoryDatabase(databaseName: "remitano"));

builder.Services
    .AddIdentity<IdentityUser, IdentityRole>(
        opt =>
        {
            opt.Password.RequireDigit = false;
            opt.Password.RequiredLength = 1;
            opt.Password.RequireLowercase = false;
            opt.Password.RequireUppercase = false;
            opt.Password.RequireNonAlphanumeric = false;
        })
    .AddEntityFrameworkStores<RemitanoContext>()
    .AddDefaultTokenProviders();

builder.Services
    .AddAuthentication(otp =>
    {
        otp.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
        otp.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        otp.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidAudience = builder.Configuration["JWT:ValidAudience"],
            ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Secret"]))
        };
    });

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddScoped<IMovieRepository, MovieRepository>();
builder.Services.AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>));

var app = builder.Build();
app.UseCors(options => options.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => "Hello World");

app.Run();

public partial class Program { }