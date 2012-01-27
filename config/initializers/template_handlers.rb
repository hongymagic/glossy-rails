require 'handlers/mustache_template_handler'

# Enable mustache view
ActionView::Template.register_template_handler(:mustache, Handlers::Mustache)