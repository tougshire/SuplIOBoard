// Grab our credentials from a .env file or environment variables

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
	const { data, error } = await supabase
		.from('IOBoard')
 		.insert([
 			{ name: 'Kyle Binaxas',Status: true },
		]);

  // Did it work?
  console.log(data, error);
  
}
