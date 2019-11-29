if (document.getElementById('minicart-wrapper')) {
    const element = document.getElementById('minicart-wrapper');
    const Minicart = React.lazy(() => import('Minicart'));
    ReactDOM.render(<React.Suspense fallback={<div dangerouslySetInnerHTML={{__html: element.innerHTML}}/>}>
        <Minicart originalContent={element.innerHTML} />
    </React.Suspense>, element);
}

