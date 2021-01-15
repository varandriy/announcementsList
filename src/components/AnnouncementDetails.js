import React from 'react';
import { getWords, getAmountOfSameWords } from '../utils';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

export const AnnouncementDetails = (props) => {
  const { ad, ads } = props;
  const words = [...getWords(ad.name), ...getWords(ad.description)];

  const amountOfWordsByAdId = Object.fromEntries(ads.map((otherAd) => {
    const otherAdWords = [...getWords(otherAd.name), ...getWords(otherAd.description)];
    return [otherAd.id, getAmountOfSameWords(otherAdWords, words)];
  }));

  const topAds = ads
    .filter((otherAd) => ad !== otherAd && amountOfWordsByAdId[otherAd.id] > 0)
    .sort((a, b) => amountOfWordsByAdId[b.id] - amountOfWordsByAdId[a.id])
    .slice(0, 3);

  return (
    <div style={{ textAlign: 'left', padding: 12, marginTop: -12 }}>
      <div style={{ marginBottom: 4 }}>
        Description:
      </div>
      <div style={{ fontSize: 13, marginBottom: 14 }}>{ad.description}</div>

      <Grid container spacing={1}>
        <Grid item xs={8}>
          {
            topAds.length > 0 && (
              <div>
                <span style={{ fontSize: 14, marginRight: 20 }}>
                  {`TOP ${topAds.length} similar:`}
                </span>
                {
                  topAds.map((ad) => (
                    <Button
                      size="small"
                      key={ad.id}
                      onClick={() => props.showDetail(ad.id)}
                    >{ad.name}
                    </Button>
                  ))
                }
              </div>
            )
          }
        </Grid>
        <Grid item xs={4} style={{ fontSize: 12, verticalAlign: 'bottom', lineHeight: '30px' }}>
          {ad.date.toLocaleString()}
        </Grid>
      </Grid>
    </div>
  );
};
