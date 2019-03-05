﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Eshop.Models;
using Microsoft.EntityFrameworkCore;

namespace Eshop.Data
{
    public class SeedData
    {
        public static void Seed(Context context)
        {
            //            if (context.Users.Any())
            //                return;

            context.Database.ExecuteSqlCommand("TRUNCATE TABLE Users");

            var users = new List<User>
            {
                new User{Email = "admin@gmail.com", Password= "admin", Role = "ADMIN"},
                new User{Email = "user@gmail.com", Password= "user", Role = "NORMAL"}
            };

            users.ForEach(t => context.Users.Add(t));

            context.SaveChanges();
        }
    }
}