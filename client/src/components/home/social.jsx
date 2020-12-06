import React, { useEffect } from 'react'
import "../../css/home/social.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterFollowButton,
    TwitterHashtagButton,
    TwitterMentionButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterDMButton,
    TwitterVideoEmbed,
    TwitterOnAirButton
} from 'react-twitter-embed';

const Social = () => {
    return (
        <div>
            <div className="social-feeds">

                <div className="twitter">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="Alien_Theory"
                        options={{ height: 400 }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Social