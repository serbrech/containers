using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace HelloWebApi.Controllers
{
    [Route("api/[controller]")]
    public class JokeController : Controller
    {
        // GET: api/values
        [HttpGet]
        public string Get()
        {
            return "Hello From Docker!";
        }
        
    }
}
