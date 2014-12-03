#!/usr/bin/env ruby

require 'erb'
require 'yaml'
require 'cgi'
require './environment'
require './numbers'

input_file = 'templates/index.html.erb'

footer_html = ERB.new(File.read('templates/footer.html.erb')).result(binding)

#log_one = YAML.load(File.read("../content/main/log_001.yaml"))
numfiles = Dir[File.join('../content/main/', '**', '*')].count { |file| File.file?(file) }

content = []
i = 0
while i < numfiles
  loc_name = $numbers[i]
  content[i] = YAML.load(File.read("../content/main/log_#{loc_name}.yaml"))
  content[i]['human'] = loc_name
  i=i+1
end

i = 0
while i < numfiles
  loc_name = $numbers[i]
  output_file = "#{ENV['output_dir']}/log-#{loc_name}.html"
  title = "  A Year in OZ - Log #{loc_name}"
  body_class = "single single-post postid-#{loc_name} single-format-standard log-#{loc_name}"
  header_html = ERB.new(File.read('templates/header.html.erb')).result(binding)
  erb = ERB.new(File.read(input_file))
  File.write(output_file, erb.result(binding))
  i=i+1
end

output_file = "#{ENV['output_dir']}/index.html"

title = '  A Year in OZ'
loc_name = false
body_class = false
header_html = ERB.new(File.read('templates/header.html.erb')).result(binding)
erb = ERB.new(File.read(input_file))
File.write(output_file, erb.result(binding))

erb = ERB.new(File.read(input_file))
File.write(output_file, erb.result(binding))
