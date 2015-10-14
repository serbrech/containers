#!/bin/bash

sleep 5

for i in 1 2 3 4 5
do
   curl -sb -url http://web:5000/api/values
done