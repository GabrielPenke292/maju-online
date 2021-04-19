<?php

namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{	
		$site = [
			"title"	=>	"Maju Online"
		];
		return view('welcome_message', $site);
	}
}
