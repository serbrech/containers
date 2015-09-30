using System;

namespace DockerHello
{
	class MainClass
	{
		public static void Main (string[] args)
		{
			for (int i = 0; i < 5; i++)
			{
				Console.WriteLine ("Hello Webstep!");
				Console.ReadKey();
			}
		}
	}
}
