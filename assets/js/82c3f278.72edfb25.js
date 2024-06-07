"use strict";(self.webpackChunkhomelab_blog=self.webpackChunkhomelab_blog||[]).push([[450],{5500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(4848),s=n(8453);const i={slug:"Wave",title:"Reloading credentials in legacy applications with Vault and Wave",authors:["matteo"],tags:["kubernetes","eso","vault","wave"]},r=void 0,o={permalink:"/blog/Wave",source:"@site/blog/2024-06-07-wave/index.md",title:"Reloading credentials in legacy applications with Vault and Wave",description:"This article discusses the automation of credential rotation with Vault for applications that do not natively support it. The complete repository can be found here.",date:"2024-06-07T00:00:00.000Z",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"},{label:"eso",permalink:"/blog/tags/eso"},{label:"vault",permalink:"/blog/tags/vault"},{label:"wave",permalink:"/blog/tags/wave"}],readingTime:5.64,hasTruncateMarker:!1,authors:[{name:"Matteo Faraci",title:"Site maintainer",url:"https://github.com/mattefara",imageURL:"https://github.com/mattefara.png",key:"matteo"}],frontMatter:{slug:"Wave",title:"Reloading credentials in legacy applications with Vault and Wave",authors:["matteo"],tags:["kubernetes","eso","vault","wave"]},unlisted:!1,nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},c=[{value:"Introduction to Tools",id:"introduction-to-tools",level:2},{value:"Vault",id:"vault",level:3},{value:"Wave",id:"wave",level:3},{value:"External Secret Operator (ESO)",id:"external-secret-operator-eso",level:3},{value:"Hands-On",id:"hands-on",level:2},{value:"Vault Setup",id:"vault-setup",level:3},{value:"Installation",id:"installation",level:4},{value:"Kubernetes Integration",id:"kubernetes-integration",level:4},{value:"Database Secret Engine",id:"database-secret-engine",level:4},{value:"External Secret Operator Setup",id:"external-secret-operator-setup",level:3},{value:"Connecting to Vault and Storing Secrets",id:"connecting-to-vault-and-storing-secrets",level:4},{value:"Wave Setup",id:"wave-setup",level:3},{value:"Watching for Config Updates",id:"watching-for-config-updates",level:4},{value:"Load Testing with Locust",id:"load-testing-with-locust",level:2},{value:"Conclusions",id:"conclusions",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This article discusses the automation of credential rotation with Vault for applications that do not natively support it. The complete repository can be found ",(0,a.jsx)(t.a,{href:"https://github.com/mattefara/k8s-wave-test",children:"here"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"introduction-to-tools",children:"Introduction to Tools"}),"\n",(0,a.jsx)(t.h3,{id:"vault",children:"Vault"}),"\n",(0,a.jsxs)(t.p,{children:["One of the appealing features of Vault is the ",(0,a.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/tutorials/db-credentials/database-secrets",children:"dynamic secrets"}),".\nThese types of credentials are automatically rotated after a fixed period, such as database credentials."]}),"\n",(0,a.jsx)(t.p,{children:"Typically, applications must support this feature, which means that there is often an integration with Vault at the application layer.\nIn other words, the application itself must support Vault."}),"\n",(0,a.jsx)(t.p,{children:"Vault offers another type of integration with init containers and sidecars.\nSpecifically, with the sidecar, the application must reload its configuration after the credential rotation, but this feature is not always supported."}),"\n",(0,a.jsx)(t.h3,{id:"wave",children:"Wave"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Wave monitors Deployments, StatefulSets, and DaemonSets within a Kubernetes cluster and ensures that their Pods always have up-to-date configuration."}),"\nWave introduces itself with this statement and can be useful in this case.\nWhen a configuration changes, Wave performs a rollout strategy so that the application can use new configurations."]}),"\n",(0,a.jsx)(t.p,{children:"At this point, what is missing is something that can update Secrets with the values in Vault, keeping them synchronized."}),"\n",(0,a.jsx)(t.h3,{id:"external-secret-operator-eso",children:"External Secret Operator (ESO)"}),"\n",(0,a.jsxs)(t.p,{children:["The External Secret Operator is a tool that monitors and synchronizes Kubernetes Secrets with others from an external source.\nThis tool supports a variety of external sources like AWS, CPG, Vault, etc.\nA list of providers can be found ",(0,a.jsx)(t.a,{href:"https://external-secrets.io/latest/provider/hashicorp-vault/",children:"here"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This tool adds the missing piece for full integration.\nIt is responsible for reading the credentials at time intervals from Vault and writing them as a Secret in Kubernetes."}),"\n",(0,a.jsx)(t.p,{children:"To summarize: credentials can be generated from Vault and expire after a fixed amount of time, ESO requests new credentials from Vault and saves them as Secrets in Kubernetes, Wave watches these secrets and updates the Deployments using them."}),"\n",(0,a.jsx)(t.h2,{id:"hands-on",children:"Hands-On"}),"\n",(0,a.jsx)(t.h3,{id:"vault-setup",children:"Vault Setup"}),"\n",(0,a.jsx)(t.h4,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(t.p,{children:["Vault can be installed using the ",(0,a.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/docs/platform/k8s/helm#using-the-helm-chart",children:"Helm Chart"}),".\nFor demonstration purposes, raft is disabled, using a single instance with storage as a file."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'server:\n  standalone:\n    config: |\n      ui = true\n\n      listener "tcp" {\n        tls_disable = 1\n        address = "[::]:8200"\n        cluster_address = "[::]:8201"\n        # Enable unauthenticated metrics access (necessary for Prometheus Operator)\n        telemetry {\n          unauthenticated_metrics_access = "true"\n        }\n      }\n      storage "file" {\n        path = "/vault/data"\n      }\n\n      # Example configuration for enabling Prometheus metrics in your config.\n      telemetry {\n        prometheus_retention_time = "1h"\n        disable_hostname = true\n      }\n'})}),"\n",(0,a.jsx)(t.p,{children:"With this configuration, the application exposes metrics that can be scraped with Prometheus."}),"\n",(0,a.jsx)(t.p,{children:"Also, TLS is disabled because the work can be left to services like Istio, but in this case, it is only for demonstration purposes."}),"\n",(0,a.jsx)(t.h4,{id:"kubernetes-integration",children:"Kubernetes Integration"}),"\n",(0,a.jsxs)(t.p,{children:["Kubernetes Service Accounts can be authenticated with Vault, so they can generate database credentials with an API call. The full configuration can be found ",(0,a.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/docs/auth/kubernetes#configuration",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In this demonstration, long-lived tokens described ",(0,a.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/docs/auth/kubernetes#continue-using-long-lived-tokens",children:"here"})," will be used."]}),"\n",(0,a.jsx)(t.h4,{id:"database-secret-engine",children:"Database Secret Engine"}),"\n",(0,a.jsxs)(t.p,{children:["Vault supports different plugins for database credential creation and rotation, and the list can be found ",(0,a.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/docs/secrets/databases#database-capabilities",children:"here"}),".\nIn this case, the ",(0,a.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/docs/secrets/databases/postgresql",children:"Postgres database secret engine"})," is used."]}),"\n",(0,a.jsx)(t.h3,{id:"external-secret-operator-setup",children:"External Secret Operator Setup"}),"\n",(0,a.jsxs)(t.p,{children:["Like Vault, ESO can be installed using a ",(0,a.jsx)(t.a,{href:"https://external-secrets.io/latest/introduction/getting-started/",children:"Helm Chart"}),".\nIn this case, the configuration stored in the ",(0,a.jsx)(t.code,{children:"values.yaml"})," file is the default."]}),"\n",(0,a.jsx)(t.h4,{id:"connecting-to-vault-and-storing-secrets",children:"Connecting to Vault and Storing Secrets"}),"\n",(0,a.jsx)(t.p,{children:"Firstly, a Kubernetes Service Account token is needed for the demonstration.\nThe service account is called Vault, and is responsible for the authentication with Vault for the generation of the dynamic secret."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yml",children:"apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: vault\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: vault-k8s-auth-secret\n  annotations:\n    kubernetes.io/service-account.name: vault\ntype: kubernetes.io/service-account-token\n"})}),"\n",(0,a.jsxs)(t.p,{children:["After the service account, it's time to instruct ESO to generate secrets from Vault.\nThis is possible with the CRD ",(0,a.jsx)(t.code,{children:"VaultDynamicSecret"}),", which defines how ESO should call the API of Vault.\nIn this resource, the role to use inside Vault during the generation and the Service Account requesting it are defined.\nFrom the Vault API specifications, the API call must be made with the ",(0,a.jsx)(t.code,{children:"GET"})," method."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"ExternalSecret"})," resource, on the other hand, is used for storing the secret inside Kubernetes.\nFrom the parameters, it is possible to specify the ",(0,a.jsx)(t.code,{children:"generatorRef"}),", which is a link to the ",(0,a.jsx)(t.code,{children:"VaultDynamicSecret"})," used above."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yml",children:'apiVersion: generators.external-secrets.io/v1alpha1\nkind: VaultDynamicSecret\nmetadata:\n  name: "pg-secret"\nspec:\n  path: "/database/creds/readonly"\n  method: "GET"\n  provider:\n    server: "http://vault.vault.svc.cluster.local:8200"\n    auth:\n      kubernetes:\n        mountPath: "kubernetes"\n        role: "readonly"\n        serviceAccountRef:\n          name: "vault"\n---\napiVersion: external-secrets.io/v1beta1\nkind: ExternalSecret\nmetadata:\n  name: "pg-secret-com"\nspec:\n  refreshInterval: "2m"\n  target:\n    name: pg-secret-com\n  dataFrom:\n  - sourceRef:\n      generatorRef:\n        apiVersion: generators.external-secrets.io/v1alpha1\n        kind: VaultDynamicSecret\n        name: "pg-secret"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["After these steps, a new secret, called ",(0,a.jsx)(t.code,{children:"pg-secret-com"}),", will be generated and it will have two keys called ",(0,a.jsx)(t.code,{children:"username"})," and ",(0,a.jsx)(t.code,{children:"password"}),".\nThe secret will be synchronized every ",(0,a.jsx)(t.code,{children:"refreshInterval"})," time and the Kubernetes secret will be overridden."]}),"\n",(0,a.jsx)(t.h3,{id:"wave-setup",children:"Wave Setup"}),"\n",(0,a.jsxs)(t.p,{children:["Like the other applications, Wave can be installed using its ",(0,a.jsx)(t.a,{href:"https://github.com/wave-k8s/wave",children:"Helm Chart"})," and no further configuration is needed."]}),"\n",(0,a.jsx)(t.h4,{id:"watching-for-config-updates",children:"Watching for Config Updates"}),"\n",(0,a.jsxs)(t.p,{children:["To instruct Wave to watch for configuration is straightforward.\nThe only required annotation is: ",(0,a.jsx)(t.code,{children:'wave.pusher.com/update-on-config-change: "true"'}),"\nFrom now on, the Deployment will be watched and restarted every time the Secret ",(0,a.jsx)(t.code,{children:"pg-secret-com"})," updates."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  ...\n  annotations:\n    wave.pusher.com/update-on-config-change: "true"\nspec:\n  ...\n  template:\n    ...\n    spec:\n      containers:\n      - name: demo\n        ...\n        env:\n        - ...\n        - name: DB_USER\n          valueFrom:\n            secretKeyRef:\n              name: pg-secret-com\n              key: username\n        - name: DB_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: pg-secret-com\n              key: password\n'})}),"\n",(0,a.jsx)(t.h2,{id:"load-testing-with-locust",children:"Load Testing with Locust"}),"\n",(0,a.jsxs)(t.p,{children:["The configuration must be validated.\nFor this reason, it will be load tested using ",(0,a.jsx)(t.a,{href:"https://locust.io/",children:"Locust"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Locust is a load testing tool that is really simple to start with.\nThe configuration is written in Python."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from locust import FastHttpUser, between, task\n\n\nclass WebsiteUser(FastHttpUser):\n\n    @task\n    def index(self):\n        self.client.get("/")\n'})}),"\n",(0,a.jsx)(t.p,{children:"In this case, performance is not important but failures are."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Locust result",src:n(3106).A+"",width:"1523",height:"731"})}),"\n",(0,a.jsx)(t.p,{children:"In this case, after three deployments caused by Wave, the request failures are at 0%.\nEvery time a new deployment is started, new Vault credentials are generated while the others do not expire immediately."}),"\n",(0,a.jsx)(t.p,{children:"The API called is really simple, it just tests a database connection with every request."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-golang",children:'http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {\n  rows, err := db.Queryx("SELECT pg_sleep($1)", pg_sleep)\n  if err != nil {\n          log.Panic(err)\n  }\n  defer rows.Close()\n\n  fmt.Fprintf(w, "Ok")\n})\n'})}),"\n",(0,a.jsx)(t.h2,{id:"conclusions",children:"Conclusions"}),"\n",(0,a.jsx)(t.p,{children:"Using this method, it is possible to integrate dynamic secrets using Vault with applications that do not support it. This increases complexity because two new tools, ESO and Wave, come into play. However, the maintenance appears to be relatively simple."}),"\n",(0,a.jsx)(t.p,{children:"The test conducted with Locust is not a performance test; it merely checks if the solution works. The standard deployment uses three replicas for the tested application, showing good results with no connection errors."}),"\n",(0,a.jsx)(t.p,{children:"If the number of replicas decreases, there are some connection errors, but they are less than 1% during the load of 1000 RPS. Nevertheless, the application attempts to shut down gracefully, terminating connections before closing down."})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3106:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/locust-b785fc295fb10a6009618191199deb3d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);