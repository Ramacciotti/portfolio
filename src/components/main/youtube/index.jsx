import { Youtube as YoutubeTag, ListItem,OrderedList,ItemLink} from './styles';

export function Youtube() {

    return (        
            
        <OrderedList>
            <ListItem>
                <ItemLink src="https://www.youtube.com/embed/videoseries?list=PLPFt6QtsNGKiYGA1WPn33VXSmFrIfgTVC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
            </ListItem>
        </OrderedList>
            

    )

}