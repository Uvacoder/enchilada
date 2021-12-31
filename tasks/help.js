module.exports = {
    default: {
        build:  '[Parent Task] Processes files used to create the site and opens it in the default browser.',
        test:   '[Parent Task] Processes files used to test the site for production and opens it in the default browser.',
        deploy: '[Parent Task] Copies tested files and uploads them to the GitHub repo\'s `docs/` folder.',
    },
    browsersync: {
        build:  '[Parent Task] Loads the site in the default browser and runs a server for other devices to connect to.',
        test:   '[Parent Task] Loads the site in the Chrome, Firefox, Safari, and Opera and runs a server for other devices to connect to.',
        reload: '[Child Task] Forces BrowserSync to reload the site.'
    },
    clean: {
        parent: '[Parent Task] Deletes all files and folders generated by Gulp.',
        root:   '[Child Task] Deletes the root folder and all its contents.'
    },
    document: {
        parent: '[Parent Task] Generates the output from the different self-documenting systems.',
        sass:   '[Child Task] Generate a Sass styleguide via SassDoc.',
        styles: '[Child Task] Generate a CSS styleguide via KSS.'
    },
    errata: {
        parent: '[Parent Task] Copies all remaining files to `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Copies all remaining files to `.build/`.',
        test:   '[Child Task] Copies all remaining files to `.test/`.',
        deploy: '[Child Task] Copies all remaining files to `docs/`.'
    },
    git: {
        parent: '[Parent Task] Uploads project to `docs/` to be deployed live.',
        add:    '[Child Task] Adds all files in `docs/`.',
        commit: '[Child Task] Commits all files in `docs/`.',
        push:   '[Child Task] Pushes all files in `docs/`.'
    },
    images: {
        parent: '[Parent Task] Processes and copies images to `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Copies images to `.build/`.',
        test:   '[Child Task] Optimizes images and copies them to `.test/`.',
        deploy: '[Child Task] Copies the optimized images to `docs/`.'
    },
    lint: {
        parent:  '[Parent Task] Checks all code for issues.',
        scripts: '[Child Task] Checks JavaScript for issues.',
        styles:  '[Child Task] Checks Sass for issues.',
        pages:   '[Child Task] HTML for issues.'
    },
    pages: {
        parent: '[Parent Task] Processes and copies pages to `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Compiles HTML partials and converts special symbols into valid HTML entities.',
        test:   '[Child Task] Minifies the compiled HTML.',
        deploy: '[Child Task] Copies the minified and compiled HTML to `docs/`.'
    },
    responsify: {
        parent: '[Parent Task] Takes images that end with `-fullwidth` and generates different sizes for use with responsive images.',
        jpgs:   '[Child Task] Generates JPG responsive images.',
        pngs:   '[Child Task] Generates PNG responsive images.'
    },
    sitemap: {
        parent: '[Parent Task] Generates a sitemap for `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Generates a sitemap for `.build/.',
        test:   '[Child Task] Generates a sitemap for `.test/.',
        deploy: '[Child Task] Generates a sitemap for `.deploy/.'
    },
    scripts: {
        parent: '[Parent Task] Processes and copies scripts to `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Collects JavaScript files and combine into one main file.',
        test:   '[Child Task] Optimizes combined JavaScript.',
        deploy: '[Child Task] Copies the optimized and combined JavaScript to `docs/`.'
    },
    sprites: {
        parent: '[Parent Task] Generates the SVG icon sprite. Requires all icons to have an `icon-` prefix.'
    },
    static: {
        parent: '[Parent Task] Copies static files and subfolders to `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Copies static files and subfolders to `.build/`.',
        test:   '[Child Task] Copies static files and subfolders to `.test/`.',
        deploy: '[Child Task] Copies static files and subfolders to `docs/`.'
    },
    styles: {
        parent: '[Parent Task] Processes and copies styles to `.build/`, `.test/`, and `docs/`.',
        build:  '[Child Task] Compile auditable Sass and report if there are syntax errors, generate sourcemaps, and generate vendor prefixes.',
        test:   '[Child Task] Rewrites CSS according to `.stylelintrc`, compile optimized Sass, and generate vendor prefixes.',
        deploy: '[Child Task] Copies the rewritted, compressed, and prefixed CSS to `docs/`.'
    },
    vendor: {
        parent:                  '[Parent Task] Copies vendor code from `node_modules/`.',
        accessiblehtml:          '[Child Task] Copies accessible-html-content-patterns to `source/`.',
        styledcomponenttemplate: '[Child Task] Copies Sass styled-component-template to `source/components/c-component/`.'
    }
};
