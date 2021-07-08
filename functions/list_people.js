// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.DATABASE_URL, process.env.SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

	const { data, error } = await supabase
		.from('IOBoard')
 		.select('name, status')

  // Did it work?
  console.log(data, error);
  
}

