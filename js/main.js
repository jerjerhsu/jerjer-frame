let ua = parseUserAgent(),
	url = getUrlData();

if( ua.Device.PC ){
	console.log( '是電腦' );
	$body.addClass( 'pc' );
	if( ua.IE8 || ua.IE9 ){
		loop = false;
		console.log( '請使用高級瀏覽器' );
		// alert( '建議使用Chrome，Firefox，以及IE10以上版本的瀏覽器進入網站，以便達成最佳瀏覽效果，謝謝' );
	}
	if( url.localhost ){}
	}
else {
	console.log( '是行動裝置' );
	if( ua.Device.tablet ){
		console.log( 'tablet' );
		// $body.addClass( 'tablet' );
	}
	if( ua.Device.mobile ){
		console.log( 'mobile' );
		// $body.addClass( 'mobile' );
	}
	if( url.localhost ){
		// $( '.broswer-popup-active' ).prop( 'checked', currentBroswer ).change();
	}
}
let 
loadend = {
	img: false,
	vue: false,
	youtube: false,
	ready: false,
},
str = {
	animationEnd: 'webkitAnimationEnd oanimationend msAnimationEnd animationend',
};

function intro(){
	closeLoading();
}

let introProgress = new LoadingProgress({
	$dom: $( '.loading_percent' )[ 0 ],
	textColor: '#fff',
	fontSize: 1,
});

$body.imagesLoaded()
.then(function( instance, image ){
	console.log( 'then' );
})
.done(function(){
	console.log( 'done' );
})
.always(function(){
	loadend.img = true;
	loadend.ready = true;
	introProgress.update( 1 );
	intro();
})
.progress(function( instance, image, progressedData ){
	introProgress.update( progressedData.loadedPercent );
});

// 尺寸
function resizing(){
    W = window.innerWidth; 
    H = window.innerHeight;
}
window.onresize = function(){
    resizing();
}

if( 'scrollRestoration' in history ){
	history.scrollRestoration = 'manual';
}
  

/* slick */


$('#banner').slick(
	{
		centerMode: true,
		slidesToShow: 3,
		centerPadding: '0px',
		respondTo: "slider",
		slidesToShow: 1,
		infinite: true,
		dots: true,
		autoplay: true,
		prevArrow: $('#ar_l'),
		nextArrow: $('#ar_r'),
		responsive: [
			{
			  breakpoint: 960,
			  settings: {
				centerPadding: '0px'
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				centerPadding: '0px'
			  }
			}
		]
	}
).on('beforeChange', function(event, slick, currentSlide, nextSlide){
}).on('afterChange', function(event, slick, currentSlide){
});
$('#banner_preview').css({'display':'none'});
$('#banner').css({'display':'block'}).addClass('show');

/* viewportChecker */
var viewpageApp = {
	$scroll: $htmlbody,
	page: '.viewpage',
	el: '.view',
	btn: '.btn-anchor',
	hash: false,
	anchor: false,
	menu: $( '.menu' ).height(),
	$mainNav: $( '.main-nav-active' ),
};
$body.on( 'click', viewpageApp.btn, function(){
	console.log( 'click' );
	var v = viewpageApp,
		target = $( this ).data( 'target' ),
		position = $( v.page + '[data-page="' + target + '"]' ).offset().top;
	v.$scroll.stop().animate({ scrollTop: position - $( '.header' ).height() }, 400 );
	v.$mainNav.prop( 'checked', false );
});
$( viewpageApp.page ).viewportChecker({
	classToAdd:                'on-visible', 
	classToAddForFullView:     'full-visible', 
	classToRemove:             'invisible', 
	removeClassAfterAnimation:  false, 
	offset:                    '50%',
	invertBottomOffset:         true,
	repeat:                     true, 
	scrollHorizontal:           false,
	callbackFunction: function( elem, action ){ 
		var v = viewpageApp;
		if( !v.anchor ){
			v.anchor = $( elem ).data( 'page' );
			$( v.btn + '[data-target="' + v.anchor + '"]' ).addClass( 'on-active' );
			v.action = action;
		}
		if( v.action !== action ){
			v.action = action;
			if( v.action == 'remove' ){
				$( v.btn + '.on-active' ).removeClass( 'on-active' );
			}
			else{
				v.anchor = $( elem ).data( 'page' );
				$( v.btn + '[data-target="' + v.anchor + '"]' ).addClass( 'on-active' );
			}
		}
		if( v.hash ){
			console.log( v.anchor );
			window.location.hash = v.anchor;
		}
	} 
});
$( viewpageApp.el ).viewportChecker({
	classToAdd:                'on-visible', 
	classToAddForFullView:     'full-visible', 
	classToRemove:             'invisible', 
	removeClassAfterAnimation:  false, 
	offset:                    '18%',
	invertBottomOffset:         false,
	repeat:                     true, 
	scrollHorizontal:           false,
	callbackFunction: function( elem, action ){} 
});

/* vue */
Vue.config.devtools = true;
var eventBus = new Vue()
Vue.component('productdetails',{
	props:{
		details: {
			type: Array,
			required: true
		}
	},
	template: `
		<div class="productdetails">
			<ul>
				<li v-for="detail in details">{{ detail }}</li>
			</ul>
		</div>
	`
});
Vue.component('product',{
	props:{
		premium: {
			type: Boolean,
			required: true
		}
	},
	template: `
		<div class="product">
			<div>
				<span 
				v-for="(stab,index) in stabs" 
				:key="index"
				v-on:click="selectedTab = stab"
				v-bind:class="{ activeTab : selectedTab == stab}"
				>{{ stab }}</span>
			</div>
			<div 
				class="cart"
				v-show="selectedTab === 'shipping'"
			>
				<p>Cart({{ cart.length }})</p>
			</div>
			<div v-show="selectedTab === 'details'">
			<div class="product-image">
					<img v-bind:src="image">
				</div>
				<div class="product-info">
					<div v-if="onSaleValue">on sale {{ onSale }}</div>
					<h1>{{ title }}</h1>
					<p v-if="inStock">in stock</p>
					<p 
						v-else
						v-bind:class="[!inStock?notInStockClass:'']"
						v-bind:style="[!inStock?{'text-decoration': 'line-through'}:'']">out of stock</p>
						<p>shipping : {{ shipping }}</p>
					<ul>
						<li v-for="detail in details">{{ detail }}</li>
					</ul>
					<productdetails :details="details"></productdetails>
					<div
						v-for="(variant,index) in variants" 
						v-bind:data-key="variant.variantId"
						class="color-box"
						:class="{activedColor : selectedVariant === index}"
						v-bind:style="{'background-color': variant.variantColor}"
						@click="updateProduct(index)">
					</div>
					<button 
						v-on:click="addToCart" 
						:disabled="!inStock"
						class="button"
						:class="{ disabledButton : !inStock }">Add to Cart</button>
					<button v-on:click="removeFromCart">remove</button>
				</div>
			</div>
			<product-tabs :reviews="reviews"></product-tabs>
		</div>
	`	,
		data () {
			return {
				brand: "Vue mastery",
				product: "Socks",
				selectedVariant: 0,
				notInStockClass : ['lineThrough-0','lineThrough-1'],
				details: ["80% cotton","20% polyester","Gender neutral"],
				onSaleValue: true,
				variants: [
					{
						variantId: 2234,
						variantColor: "green",
						variantImage: "img/vmSocks-green-onWhite.jpg",
						variantquanty: 10
					},
					{
						variantId: 2235,
						variantColor: "blue",
						variantImage: "img/vmSocks-blue-onWhite.jpg",
						variantquanty: 5
					}
				],
				reviews: [],
				stabs:['details','shipping'],
				selectedTab: 'details'
			}
		},
		methods: {
			addToCart: function () {
				// this.cart += 1
				this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId)
			},
			updateProduct(index) {
				this.selectedVariant = index;
				console.log(index);
			},
			removeFromCart: function () {
				this.$emit('remove-from-cart',this.variants[this.selectedVariant].variantId)
			},
			addReview(productPreview){
				this.reviews.push(productPreview)
			}
		},
		computed: {
			title () {
				return this.brand + ' ' + this.product
			},
			image () {
				return this.variants[this.selectedVariant].variantImage
			},
			inStock () {
				return this.variants[this.selectedVariant].variantquanty > 0
			},
			onSale () {
				return this.brand + this.product
			},
			shipping () {
				if(this.premium){
					return "free"
				}
				return "2.99"
			}
		},
		mounted(){
			eventBus.$on('review-submited',productPreview =>{
				this.reviews.push(productPreview)
			})
		}
});
Vue.component("product-review",{
	template: `
		<form class="review-form" v-on:submit.prevent="onSubmit">
			<p v-if="errors.length">
				<b>please correct the folling error(s):</b>
				<ul>
					<li v-for="error in errors">{{ error }}</li>
				<ul>
			</p>
			<p>
				<label for="name">Name</label>
				<input id="name" v-model="name">
			</p>
			<p>
				<label for="review">Review:</label>
				<textarea id="review" v-model="review"></textarea>
			</p>
			<p>
			<label for="rating">Raiting:</label>
				<select id="rating" v-model.number="rating">
					<option>5</option>
					<option>4</option>
					<option>3</option>
					<option>2</option>
					<option>1</option>
				</select>
			</p>
			<p>
				<label for="recommend">Would you recommend this product?</label>
				<input type="radio" name="recommend" value="yes" v-model="recommend">
				<input type="radio" name="recommend" value="no" v-model="recommend">
			</p>
			<p>
				<input type="submit" value="Submit">
			</p>
		</form>
	`,
	data(){
		return {
			name: null,
			review: null,
			rating: null,
			recommend: null,
			errors:[]
		}
	},
	methods:{
		onSubmit(){
			this.errors=[];
			if(this.name && this.review && this.rating && this.recommend){
				let productPreview = {
					name: this.name,
					rating: this.rating,
					review: this.review,
					recommend: this.recommend
				}
				eventBus.$emit('review-submited',productPreview)
				this.name = null;
				this.rating = null;
				this.review = null;
				this.recommend = null;
			}
			else {
				if(!this.name)this.errors.push("name is required!")
				if(!this.review)this.errors.push("review is required!")
				if(!this.rating)this.errors.push("rating is required!")
				if(!this.recommend)this.errors.push("recommend is required!")
			}
		}
	}
});
Vue.component("product-tabs",{
	props:{
		reviews:{
			type: Array,
			required: true
		}
	},
	template:`
		<div>
			<div class="tab-box">
				<span 
					class="tab"
					v-for="(tab,index) in tabs"
					:key="index"
					v-on:click="selectedTab = tab"
					v-bind:class="{ activeTab : selectedTab == tab}"
				>
					{{ tab }}
				</span>
			</div>
			<div v-show="selectedTab === 'Reviews'">
				<h2>Reviews</h2>
				<p v-if="!reviews.length">there are no reviews yet</p>
				<ul>
					<li v-for="review in reviews">
						<p>name : {{ review.name }}</p>
						<p>rating : {{ review.rating }}</p>
						<p>review : {{ review.review }}</p>
						<p>recommend : {{ review.recommend }}</p>
					</li>
				</ul>
			</div>
			<product-review 
				v-show="selectedTab == 'Make a review'"
			></product-review>
		</div>
	`,
	data(){
		return {
			tabs: ["Reviews","Make a review"],
			selectedTab: "Reviews"
		}
	}
})
Vue.component('detail-shipping',{
	props:{
		cart:{
			type:Array,
			required: true
		}
	},
	template:`
		<div>


		</div>
	`,
	data(){
		return {
		}
	}
})
var app = new Vue({
	el: "#app",
	data: {
		premium: true,
		cart: []
	},
	methods: {
		updateCart(id){
			this.cart.push(id)
		},
		decressCart(id){
			console.log(id,this.cart.length)
			for(var i = 0; i < this.cart.length;  i ++ ){
				if(this.cart[i] == id){
					this.cart.splice(i,1)
					break;
				}
			}
		}
	}
});