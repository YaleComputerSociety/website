#!/usr/bin/ruby

# takes the output of this on stdin: git log --numstat --prety='%an'

map = Hash.new{|h,k| h[k] = [0,0,0]}
who = nil
memo = nil
STDIN.read.split("\n").each do |line|
  parts = line.split
  next if parts.size == 0
  if parts[0].match(/[a-z]+/)
    if who && memo[0] + memo[1] < 2000
      map[who][0] += memo[0]
      map[who][1] += memo[1]
      map[who][2] += 1
    end
    who = parts[0]
    memo = [0,0]
    next
  end
  if who
    memo[0]+=line[0].to_i
    memo[1]+=parts[1].to_i
  end
end

puts map.to_a.map{|x| [x[0], x[1][0], x[1][1], x[1][2]]}.sort_by{|x| -x[1] - x[2]}.map{|x|x.inspect.gsub("[", "").gsub("]","")}.join("\n")
