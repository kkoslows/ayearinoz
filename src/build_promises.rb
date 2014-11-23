#!/usr/bin/env ruby

require 'erb'
require 'yaml'
require 'cgi'
require './environment'

input_file = 'templates/promises.html.erb'
output_file = "#{ENV['output_dir']}/promises/index.html"

system("mkdir -p #{ENV['output_dir']}/promises") or abort("Couldn't create #{ENV['output_dir']}/promises")

title = '  Our Promises'
header_html = ERB.new(File.read('templates/header.html.erb')).result(binding)
footer_html = ERB.new(File.read('templates/footer.html.erb')).result(binding)

erb = ERB.new(File.read(input_file))
File.write(output_file, erb.result(binding))
