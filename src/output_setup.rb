#!/usr/bin/env ruby

system("mkdir -p #{ENV['output_dir']}") or abort("Couldn't create #{ENV['output_dir']}")
system("rm -rf #{ENV['output_dir']}/*") or abort("Couldn't delete old folder")
system("cp -r ../images #{ENV['output_dir']}/") or abort("Couldn't copy images")
system("cp -r ../themes #{ENV['output_dir']}/") or abort("Couldn't copy themes")
system("cp -r ../js #{ENV['output_dir']}/") or abort("Couldn't copy js")
