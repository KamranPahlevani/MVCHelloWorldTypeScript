using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCHelloWorldTypeScript.Controllers
{
    public class TypeScriptController : Controller
    {
        // GET: TypeScript
        public ActionResult HelloWorld()
        {
            return View();
        }
    }
}