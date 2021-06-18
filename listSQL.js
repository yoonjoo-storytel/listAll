const { google } = require('googleapis');
const sql = google.sql('v1beta4');

// Each API may support multiple version. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
async function listSQL() {
  const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/compute'],
  });
  const authClient = await auth.getClient();

  // obtain the current project Id
  const project = await auth.getProjectId();

  // Fetch the list
  const res = await sql.instances.list({ project, auth: authClient });
  console.log(res.data);
}

module.exports = listSQL;
