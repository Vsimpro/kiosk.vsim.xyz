# Contributing to Kiosk Tooling

Quick Explanation on how to add tooling, if your wish is to create a pull request!

## How to submit a new tooling

If possible, add a comment to your code that signifies which blocks of code were written by you. This helps housekeeping! 

First page, the _index.html_, I will try to keep under 14kB. The reasoning you can find from [here](https://endtimes.dev/why-your-website-should-be-under-14kb-in-size/).
On top of that, the calls to externals services will be kept to a bare minimum. The reasoning for this that some tools may leak client data during pentest, and we'd like to avoid that.

For these reasons **the index.html file will be kept to a higher standard than other files**. 
If you wish to create something beefier, or something that uses external API calls, please create a new file (as per examples) that will be linked to index.html!

## Creating new files

If you wish to add your own tooling, your best bet is to simply create a new .html file as per the examples.

If you add a new file, please add a description to the page, explaining what it does, to a reasonable detail.

It is also possible to group your tooling to similiar kind of tooling, and have them all on the same file. For example if you want to add a call to an external API for information gathering, and see someone has a similiar call with a similiar purpose to a different API, maybe consider using the same .html instead of creating a new one!
