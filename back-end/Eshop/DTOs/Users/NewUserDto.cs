﻿using System.ComponentModel.DataAnnotations;

namespace Eshop.DTOs.Users
{
    public class NewUserDto
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = " Name required ")]
        public string Name { get; set; }

        [Required(AllowEmptyStrings = false, ErrorMessage = " Surname required ")]
        public string Surname { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [EmailAddress]
        [StringLength(255, ErrorMessage = "Email cannot exceed 255 characters")]
        public string Email { get; set; }

        [Display(Name = "Country")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Country required ")]
        public string Country { get; set; }

        [Display(Name = "City")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "City required ")]
        public string City { get; set; }

        [Required(ErrorMessage = "Address is required")]
        [MinLength(8, ErrorMessage = "Address must be at least 8 characters long")]
        [StringLength(128, ErrorMessage = "Address cannot exceed 255 characters")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters long")]
        [StringLength(128, ErrorMessage = "Password cannot exceed 128 characters")]
        public string Password { get; set; }

        public bool IsAdmin { get; set; }
    }
}