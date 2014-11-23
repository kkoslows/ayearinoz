#!/usr/bin/env ruby

require 'erb'
require 'yaml'
require 'cgi'
require './environment'
require './numbers'

input_file = 'templates/index.html.erb'
output_file = "#{ENV['output_dir']}/index.html"

#system("mkdir -p #{ENV['output_dir']}/about") or abort("Couldn't create #{ENV['output_dir']}/about")

title = '  A Year in OZ'
header_html = ERB.new(File.read('templates/header.html.erb')).result(binding)
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

erb = ERB.new(File.read(input_file))
File.write(output_file, erb.result(binding))
