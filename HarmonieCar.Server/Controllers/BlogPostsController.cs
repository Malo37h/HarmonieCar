using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HarmonieCar.Server.Models;
using Microsoft.Extensions.Hosting;

namespace HarmonieCar.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private readonly HarmonieContext _context;

        public BlogPostsController(HarmonieContext context)
        {
            _context = context;
        }

        // GET: api/BlogPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogPosts>>> GetBlogPosts()
		{
			return await _context.BlogPosts
				.OrderByDescending(p => p.CreationDate)
				.Take(10)
				.ToListAsync();
		}

        // GET: api/BlogPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogPosts>> GetBlogPosts(int id)
        {
            var blogPosts = await _context.BlogPosts.FindAsync(id);

            if (blogPosts == null)
            {
                return NotFound();
            }

            return blogPosts;
        }

        // PUT: api/BlogPosts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBlogPosts(int id, BlogPosts blogPosts)
        {
            if (id != blogPosts.Id)
            {
                return BadRequest();
            }

            _context.Entry(blogPosts).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BlogPostsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BlogPosts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BlogPosts>> PostBlogPosts(BlogPosts blogPosts)
        {
			if (string.IsNullOrWhiteSpace(blogPosts.Title) || string.IsNullOrWhiteSpace(blogPosts.Content))
			{
				return BadRequest("Le titre et le contenu sont obligatoires.");
			}

			blogPosts.CreationDate = DateTime.Now; // sécurité côté back
			_context.BlogPosts.Add(blogPosts);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogPosts", new { id = blogPosts.Id }, blogPosts);
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogPosts(int id)
        {
            var blogPosts = await _context.BlogPosts.FindAsync(id);
            if (blogPosts == null)
            {
                return NotFound();
            }

            _context.BlogPosts.Remove(blogPosts);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BlogPostsExists(int id)
        {
            return _context.BlogPosts.Any(e => e.Id == id);
        }
    }
}
