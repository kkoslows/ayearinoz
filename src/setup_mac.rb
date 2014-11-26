#!/usr/bin/env ruby

require 'socket'
require 'timeout'
require './environment'

def is_port_open(ip, port)
  begin
    Timeout::timeout(1) do
      begin
        s = TCPSocket.new(ip, port)
        s.close
        return true
      rescue Errno::ECONNREFUSED, Errno::EHOSTUNREACH
        return false
      end
    end
  rescue Timeout::Error
  end

  return false
end

listening = is_port_open('127.0.0.1','80')
if !listening
  puts "Starting apache..."
  system('sudo apachectl start') or abort("Couldn't start apache")
end

owner_id = `/usr/bin/stat -f %u #{ENV['output_dir']}`
result = $?.success?
my_id = `id -u`
if !result or owner_id != my_id
  puts "Result: #{result}"
  puts "owner_id: #{owner_id}"
  puts "my_id: #{my_id}"
  system("sudo mkdir -p #{ENV['output_dir']}") or abort("Couldn't create #{ENV['output_dir']}")
  system("sudo chown -R #{ENV['USER']} #{ENV['output_dir']}") or abort("Couldn't chown #{ENV['output_dir']}")
end
