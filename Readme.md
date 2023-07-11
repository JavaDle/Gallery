<h1 align="left">Gallery for Laravel Nova 4</h1>

<p align="left">
  Gallery is a Laravel Nova field package that allows for image manipulation capabilities, such as cropping, resizing, quality adjustment, and WebP conversion. It utilizes the powerful Intervention Image class for image manipulation. The purpose of this package is to optimize images for web usage by converting them to the WebP format, which provides superior compression and faster load times.
<br><br>Advanced Image Manipulation Made Easy with Images Magic
<br><br>✅ Single/Multiple Uploads <br>✅ Cropping <br>✅ Resizing
<br>✅ Fitting <br>✅ Quality Control <br>✅ WebP Conversion
<br>✅ Watermarking <br>✅ Custom Directories
</p>


### Requirements

* PHP (^7.1 or higher)
* Laravel Nova (^4.0 or higher)

### 🚀 Installation
#### Install the package via Composer.
```` bash
composer require ayvazyan10/nova-Gallery
````
### 📚 Usage
Here is an example of how to use Gallery in your Laravel Nova application:
In your Laravel Nova resources, use the Gallery field:
```` php
use Gallery;

public function fields(Request $request)
{
    return [
        // ...

        Gallery::make('Image', 'image'),

        // ...
    ];
}
````
### ⚡ All Methods
```` php
Gallery::make('Image')
    ->multiple()
    ->crop($width, $height, $left = 0, $top = 0)
    ->resize($width, $height)
    ->fit($width, $height)
    ->quality($quality)
    ->directory($path)
    ->convert($convert = true)
    ->watermark($path, $position = 'bottom-right', $x = 0, $y = 0);
````
### 📖 Examples
Below are some examples in different scenarios.
#### - <u>Multiple Images</u>
To enable multiple image uploads, use the multiple() method. Note that when you use the multiple() method, your database column should be of type text, longtext, or json to store all images in a JSON format. Additionally, you will have the ability to sort uploaded images by drag and drop.
``` php
Gallery::make('Images')->multiple(),
```
#### - <u>Cropping</u>
To crop images, use the crop() method:
``` php
Gallery::make('Image')->crop($width, $height, $left, $top),
```
#### - <u>Resizing</u>
To resize images, use the resize() method:
``` php
Gallery::make('Image')->resize($width = int|null, $height = int|null),
```
#### - <u>Quality</u>
To adjust the image quality, use the quality() method: default is 90
``` php
Gallery::make('Image')->quality(90),
```
#### - <u>WebP Conversion</u>
To convert images to WebP format, use the convert() method:<br>
By default, the images will be converted to WebP format. To disable conversion, pass false to the convert() method:
``` php
Gallery::make('Image')->convert(false),
```
#### - <u>Fit</u>
You can use the fit() method when defining the Gallery field in your Nova resource:
``` php
Gallery::make('Image')->fit($width, $height),
```
#### - <u>Field with watermark</u>
Replace the /path/to/watermark.png with the actual path to your watermark image.<br>
This will add the watermark to the image with the specified path, position, and offset (15x15 pixels from the bottom-right corner in this example).
Remember to import the Gallery class at the top of your Nova resource file:
``` php
Gallery::make('Image')->watermark('/path/to/watermark.png', 'bottom-right', 15, 15),
```
#### - <u>Directory Customization</u>
BY DEFAULT - Gallery uses this structure: /storage/Gallery/year/month/day/image_name.webp

The Gallery class includes a directory() method that allows you to specify a custom directory path for your image uploads. This allows for more flexibility in managing the location of your image files.

To use this feature, call the directory() method when creating an Gallery field and provide it with your custom directory path as an argument. This path should be a string, and should not start or end with a /.

Here is an example of how to use it:
``` php
Gallery::make('Image')->directory('your/custom/directory')
```
In this example, any images uploaded through this field will be saved in your/custom/directory.

Caution:
The provided directory path should not start or end with a /. If it does, an InvalidArgumentException will be thrown. Make sure your directory path is correctly formatted when using this feature.

For example, the following code would throw an exception:
``` php
// This will throw an exception because the directory path starts with a '/'
// Directory structure should not start or end with a slash. Only in the middle.
Gallery::make('Image')
    ->directory('/invalid/directory/path')
```

## Contributing

Please see [contributing.md](contributing.md) for details and a todolist.

## Security

If you discover any security related issues, please email huseynjavadle@gmail.com instead of using the issue tracker.

## Author

- <a href="https://github.com/JavaDle/">Huseyn JavaDLE</a>

## License

MIT. Please see the [license file](license.md) for more information.
