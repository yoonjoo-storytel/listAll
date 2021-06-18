const { google } = require('googleapis');
const sql = google.sql('v1beta4');

async function listSQL() {
  const auth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/sql'],
  });
  const authClient = await auth.getClient();

  // obtain the current project Id
  const project = await auth.getProjectId();

  // Fetch the list
  const res = await sql.instances.list({ project, auth: authClient });
  console.log(res.data);
}

module.exports = listSQL;
