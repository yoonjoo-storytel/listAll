async function listDeployments() {
    const k8s = require('@kubernetes/client-node');
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();
    
    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    var deployments = []
    await k8sApi.listNamespacedPod('default').then((res) => {
        var dep = res.body.items.filter(item => 'auto-deploy-timestamp' in item.metadata.labels)
        dep.map(d => deployments.push(d.metadata.labels.app));
        deployments.filter(function(value, index, self){
            return self.indexOf(value) === index;
        })
    });
    return deployments;
}

module.exports = listDeployments;