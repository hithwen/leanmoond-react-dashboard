# Dashboard.css

Here we are going to explain Flexbox behavior on dashboard.css

## Notes
By default, when we are defining a flexbox container with `flex-direction: column`, each flex item that contains this container takes a 100% of width inside it.
So, if we use `align-items: center` we are displaying items centerly in horizontal way and item width is adapting to content width instead of 100%.

We can use `text-align: center` in *.dashboard-title* to center text but maintaining 100% of width.

## Before
```css
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dashboard-title {
  padding-bottom: 3em;
  padding-top: 1em;
}
```

## After
```css
.dashboard {
  display: flex;
  flex-direction: column;
}

.dashboard-title {
  text-align: center;
  padding-bottom: 3em;
  padding-top: 1em;
}
```

## Notes
Setting width to elements in px units, sometimes could be dangerous on lower resolution.
That's why we could use `flex-basis` in `%` units to split our flex items.

For example we are going to take:

- 3 items/row on Desktop resolution.
- 2 items/row on Tablet resolution.
- 1 item/row on Mobile resolution.


## Before
```css
.dashboard-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 500px;
}

```

## After
```css
.dashboard-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.33%;
  /*Some padding to get more spaces between items*/
  padding: 50px;

  /*Optional: Add border to see item box*/
  border: 1px solid black;
}

@media (max-width:1200px) {
  .dashboard-item {
    flex-basis: 50%;
  }
}

@media (max-width:768px) {
  .dashboard-item {
    flex-basis: 100%;
  }
}
```
