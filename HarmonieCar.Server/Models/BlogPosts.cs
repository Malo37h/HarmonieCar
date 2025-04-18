using System;
using System.Collections.Generic;

namespace HarmonieCar.Server.Models;

public partial class BlogPosts
{
    public int Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public string? Content { get; set; } = string.Empty;

    public DateTime CreationDate { get; set; } = DateTime.Now;

}
