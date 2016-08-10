
# makers@yale

**Makers@Yale** is a directory for hackers, developers, designers and DIY makers at Yale University.

The purpose is to **encourage collaboration in developing science and engineering projects** at Yale.
The directory lists individuals, their abilities, past achievements and ways of reaching out to them.

## Join The List

To join this list, you'll have to add to this repository a JSON file with your information. First you must create a github account at [github.com/join](https://github.com/join). After you've done that, navigate to the `_data/members` folder, through github, and click the "New file" button.

The name of the file should have be formated like `<firstname>-<lastname>.json`. Enter that in the input box like so:

![](http://i.imgur.com/JcyjNwX.png)

Inside the "Edit new file" box, you should add your information using the following attributes:

```
{
    "name": "Handsom Dan",
    "year": 2019,
    "college": "Ezra Stiles",
    "major": "Electrical Engineering",
    "picture": "http://i.imgur.com/QUHK0Pe.png",
    "skills": [
        "Python", "Javascript (React)", "Swift and Android"
    ],
    "experience": [
        {
            "title": "Member of YGM's ECD Team",
            "time": "2014",
            "detail": "I'm currently helping out (not) with a YGM project for building a directory for extracurriculars at Yale.",
            "tags": ["Node", "Angular"]
        },
    ],
    "extracurriculars": [
        {
            "title": "Conservative Party",
            "time": "2016"
        },
    ],
    "links": {
        "github": "http://github.com/handsomdan",
        "facebook": "http://facebook.com/handsomdan"
    },
    "available": true,
    "bio": "Generalist programmer, focused on peeing around campus. Collaborating on great things at YGM. <br /> I'm interested in Sasha Pup and humanities, and that's what defines my Yale experience.",
    "smallBio": "Generalist programmer, focused on peeing around campus. Collaborating on great things at YGM."
}

```

You must use proper JSON syntax, otherwise the website won't understand your information (and for that we will probably reject your pull request. Before submitting your file, use [jslint](http://jsonlint.com/) to check for syntax error and misplaced quotes/commas.

After you've edited your information, you're ready to "commit your file" and push it to us. To do that, you'll have to explain your changes, like so:

![](http://i.imgur.com/gF5u58C.png)

Then click "Commit changes" and you're done. A request will be created to add your file to the project, and we'll answer it in a bit.

### "How to Submit"'s FAQ

#### What do I use for the "picture" attribute?

We recommend using the path to your own Facebook profile picture, like so:

`"picture": "https://graph.facebook.com/<idhere>/picture?width=400&height=400"`

replacing `<idhere>` with your own facebook id. To find your facebook id, check
out this website: [findmyfbid.com](http://findmyfbid.com/).


## Ideas

- Use history.pushState() to replace url for user's profile path when you click on their profile.