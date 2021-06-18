const { KubernetesObjectApi } = require('@kubernetes/client-node');

async function listDeployments() {
  const k8s = require('@kubernetes/client-node');
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
  var deployments = [];
  await k8sApi.listNamespacedPod('default').then((res) => {
    var dep = res.body.items.filter(
      (item) => 'auto-deploy-timestamp' in item.metadata.labels,
    ); // filtered the 'pods' of deployments

    dep.map((item) => {
      var nameSql = '?';
      if (item.metadata.annotations) {
        if ('kubernetes.io/limit-ranger' in item.metadata.annotations) {
          var result =
            item.metadata.annotations['kubernetes.io/limit-ranger'].match(
              /.+container\s(.+sql)/,
            );
          if (result) {
            nameSql = result[1];
          }
        }
      }
      if (
        //check if the deployment has already been added
        !deployments.find(function (dep) {
          return dep.deployment == item.metadata.labels.app;
        })
      ) {
        deployments.push({
          deployment: item.metadata.labels.app,
          sql: nameSql,
        });
      }
    });
  });

  return deployments;
}

module.exports = listDeployments;
