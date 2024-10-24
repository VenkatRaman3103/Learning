#include <iostream>
#include <vector>

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
		vector<int> nonZeroes = {};

		int zeroCounter = 0;
		
		for(int i = 0; i < nums.size();i++){
			int element = nums[i];

			if(element != 0){
				nonZeroes.push_back(element);
			}else{
				zeroCounter++;
			};
		}

		for(int j = 0; j <zeroCounter;j++){
			nonZeroes.push_back(0);
		}

		for(int k = 0; k < nums.size(); k++){
			nums[k] = nonZeroes[k];
		}
    }
};

int main(){

}
