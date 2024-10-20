#include <iostream>
#include <vector>
#include <string>
#include <map>
using namespace std;

class Object
{
public:
    // attributes
    double height;
    double weight;

    double radius;

    // methods
    int getVolume()
    {
        int result = height * weight;

        return result;
    }

    int getCircumference()
    {
        int result = 2 * 3.14 * radius;

        return result;
    }
};

class PrivateObject
{
private:
    int height;
    int weight;

public:
    void assignValue(int heightInput, int weightInput)
    {
        height = heightInput;
        weight = weightInput;
    };

    map<string, int> returnValue()
    {
        return {
            {"height", height}, {"weight", weight}};
    }
};

int main()
{
    Object rectangle;

    rectangle.height = 10;
    rectangle.weight = 10;

    int volume = rectangle.getVolume();

    // Project Object
    Object *square = new Object;
    (*square).height = 120;

    cout << volume << endl;
    cout << square->height << endl;

    delete square;

    PrivateObject triangle;
    triangle.assignValue(10, 10);

    map<string, int> result = triangle.returnValue();

    cout
        << result["height"] << endl
        << result["weight"] << endl;
}