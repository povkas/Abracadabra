﻿using Eshop.Data.Repositories;
using Eshop.Models;
using Eshop.Services;

using Eshop.Services.Interfaces;
using EShop.Services;
using EShop.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Eshop.Configurations
{
    public static class DependencyInjectionExtensions
    {
        public static IServiceCollection AddAllDependencies(this IServiceCollection service)
        {
            return service
                .AddDataLayerDependencies()
                .AddApplicationDependencies();
        }

        public static IServiceCollection AddDataLayerDependencies(this IServiceCollection service)
        {
            return service
                .AddScoped<IRepository<Product>, ProductsRepository>()
                .AddScoped<IRepository<ProductCategory>, ProductCategoriesRepository>()
                .AddScoped<IRepository<User>, UsersRepository>()
                .AddScoped<ICreditCardsRepository, CreditCardsRepository>();
        }

        public static IServiceCollection AddApplicationDependencies(this IServiceCollection service)
        {
            return service
                .AddScoped<IProductsService, ProductService>()
                .AddScoped<IProductCategoriesService, ProductCategoryService>()
                .AddScoped<IUserService, UserService>()
                .AddScoped<ICreditCardService, CreditCardService>();
        }
    }
}