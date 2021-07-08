// Grab our credentials from a .env file or environment variables
require('dotenv').config()

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
	const { data, error } = await supabase
		.from('IOBoard')
 		.insert([
 			{ Name: 'Kyle Binaxas' },
		]);

  // Did it work?
  console.log(data, error);
  
}

