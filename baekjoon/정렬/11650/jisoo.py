# import sys
# input = sys.stdin.readline

# n=int(input())
# input_arr={}

# for i in range(n):
#     input_arr[i]=[]

# for i in range(n):
#     a, b = map(int, input().split())
#     input_arr[a].append(b)
    
# for key in input_arr.keys():
#     input_arr[key].sort()
#     for j in range(len(input_arr[key])):
#         print(key, input_arr[key][j])
# 런타임 에러남!

import sys
input = sys.stdin.readline

n=int(input())
input_arr=[]

for i in range(n):
    x, y = map(int, input().split())
    input_arr.append([x,y])

input_arr.sort(key=lambda x: (x[0], x[1]))

for i in range(n):
    print(input_arr[i][0], input_arr[i][1])