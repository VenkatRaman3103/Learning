#include <iostream>
#include <vector>
using namespace std;

class Solution {
  public:
    int removeElement(vector<int> &nums, int val) {
        int counter = 0;

        vector<int> filterdArr = {};

        for (int i = 0; i < nums.size(); i++) {
            int element = nums[i];
            if (element == val) {
                counter++;
            } else {
                filterdArr.push_back(element);
            }
        }

        return counter;
    };
};

int main() {

};
