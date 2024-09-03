#include <iostream>
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

int main()
{
    Object rectangle;

    rectangle.height = 10;
    rectangle.weight = 10;

    int volume = rectangle.getVolume();

    // Project Object
    Object* square = new Object;

    cout << volume << endl;
}