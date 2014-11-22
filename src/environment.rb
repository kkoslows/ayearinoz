#!/usr/bin/env ruby

ENV['site_url'] = 'http://ayearinoz.holtandkristin.com'
ENV['site_name'] = 'A Year in OZ'
ENV['shared_email'] = 'us@holtandkristin.com'
ENV['kristin_facebook'] = 'http://www.facebook.com/kristinkoslowski'
ENV['kristin_insta'] = 'http://instagram.com/kkoslows/'
ENV['holt_facebook'] = 'http://www.facebook.com/holtwilkins'
ENV['site_description'] = 'Holt and Kristin had the opportunity to move to Australia for a year, and they decided to do it, and blog about it'

ENV['metadata_html'] = ERB.new(File.read('templates/metadata.html.erb')).result(binding)

