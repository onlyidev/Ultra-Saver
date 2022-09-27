using Microsoft.EntityFrameworkCore;

namespace Ultra_Saver;

public class SimpleDatabaseContext : DbContext
{

    public SimpleDatabaseContext(DbContextOptions<SimpleDatabaseContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // base.OnModelCreating(modelBuilder);
        modelBuilder.UseSerialColumns();
    }

    public DbSet<SimpleTestModel> SimpleTests { get; set; }

    public DbSet<RecipeTestModel> RecipeTest {  get; set; }

}