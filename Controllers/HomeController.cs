using Microsoft.AspNetCore.Mvc;

namespace aspnet_react_project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Welcome to the ASP.NET and React project!");
        }
    }
}