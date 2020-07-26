# Welcome to the documentation for YourArticle



## Getting all articles :mag:

Make a `GET` request to the following web address

```html
domain-name/articles
```

 

## Post a articles :mailbox:

Make a `POST` request to the following web address

```
domain-name/articles	
```

with the keys of `title` and `content` and there respective values. For example:

title = "C++"

content = "Used extensively for low level system interactions"



## Deleting all the articles :fire:

Make a `DELETE` request to the following web address

```
domain-name/articles
```



## Getting a specific article :mag:

Make a `GET` request to with the article name

```
domain-name/articles/C++
```



## Update a specific article using `PUT  `  :new:

Make a `PUT` request as follows

```
domain-name/articles/C++
```

along with the `title` and `content` keys, with there values

## Update a specific article using `PATCH` :new:

Make a `PUT` request as follows

```
domain-name/articles/C++
```

along with the  keys and there values that are to be changed



## Deleting a specific article :fire:

Make a `delete` request to as follows

```
domain-name/arcticles/C++
```

 You can change `C++` with any article that you want to delete



### That's it! ​Go​ ​use​ ​it​ :computer:

