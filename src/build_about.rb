#!/usr/bin/env ruby

require 'erb'
require 'yaml'
require 'cgi'
require './environment'

input_file = 'templates/about.html.erb'
output_file = "#{ENV['output_dir']}/about/index.html"

system("mkdir -p #{ENV['output_dir']}/about") or abort("Couldn't create #{ENV['output_dir']}/about")

title = '  About'
header_html = ERB.new(File.read('templates/header.html.erb')).result(binding)
footer_html = ERB.new(File.read('templates/footer.html.erb')).result(binding)

about_holt = File.read("../content/about/holt.html")
about_kristin = File.read("../content/about/kristin.html")
blurb = File.read("../content/about/blurb.html")
main = YAML.load(File.read("../content/about/main.yaml"))

erb = ERB.new(File.read(input_file))
File.write(output_file, erb.result(binding))
