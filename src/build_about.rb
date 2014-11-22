#!/usr/bin/env ruby

require 'erb'
require 'yaml'
require 'cgi'
require './environment'

input_file = 'templates/about.html.erb'
output_file = '../about.html'

title = '  About'

about_holt = File.read("../content/about/holt.html")
about_kristin = File.read("../content/about/kristin.html")
blurb = File.read("../content/about/blurb.html")
main = YAML.load(File.read("../content/about/main.yaml"))

erb = ERB.new(File.read(input_file))
File.write(output_file, erb.result(binding))
