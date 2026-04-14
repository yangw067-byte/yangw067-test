const DEPLOYMENT_INFO = {
    date: new Date().toISOString(),
    runId: 'local-dev',
    commit: 'local-dev-mode',
    timestamps: {
        code: new Date(Date.now() - 15000).toISOString(),
        test: new Date(Date.now() - 12000).toISOString(),
        build: new Date(Date.now() - 8000).toISOString(),
        deploy: new Date().toISOString()
    }
};
