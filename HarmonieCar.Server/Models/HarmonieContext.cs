using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace HarmonieCar.Server.Models;

public partial class HarmonieContext : DbContext
{
    public HarmonieContext()
    {
    }

    public HarmonieContext(DbContextOptions<HarmonieContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BlogPosts> BlogPosts { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=HarmonieDb;Trusted_Connection=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BlogPosts>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__BlogPost__3214EC07BC8116AB");

            entity.Property(e => e.CreationDate).HasColumnType("datetime");
            entity.Property(e => e.Title).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
