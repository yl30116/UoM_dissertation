# UoM_dissertation
Explore accessibility level in Greater Manchester, UK.  

This repository stores R code and datasets that are needed in this dissertation. Please use `dissertation_final.R` to run the analyses.  

- **dissertation_final.R**  

R code for the whole analysis.

- **qgis2web_accessibility_level**  

`index.html` presents map of accessibility level in Greater Manchester from time threshold 5 minutes to 45 minutes.

- **Supplementary_Data** (source: [InFuse](http://infuse.ukdataservice.ac.uk), [Nomis](https://www.nomisweb.co.uk), 
[ONS](http://geoportal.statistics.gov.uk/datasets/middle-layer-super-output-areas-december-2011-boundaries-ew-bfc-1?geometry=-17.993%252C50.522%252C13.647%252C55.161))  

This folder contains datasets of city centrality factor (in subfolder *City_Centrality*), population characteristics (in subfoler *socio-economic_characteristics_GM*),
and transport factor `distance_to_empcentres.csv` (commute distance in subfoler *socio-economic_characteristics_GM*).
Road network data are too large to upload to this repository. Please find this dataset on [Ordnance Survey](https://osdatahub.os.uk/downloads/open/OpenRoads).  

N.B. Road network data should be intersected with `uber_movement_zones.shp` in subfolder *MSOA_2011_Census_England* before use.

- **Weekdays** (source: [Uber Movement](https://movement.uber.com/?lang=en-GB))  

Main Uber Movement travel times data for weekdays. There are 15 files for each quarter from 2016Q1 to 2019Q3.
