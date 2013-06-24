middleman-scss-bootstrap
========================

### middlemanにScss版のbootstrapを組み込んでみました。
アイコンは`Elusive-Icons Webfont`に変えてて、テンプレートエンジンは`erb`です。

あれだったら`slim`か`haml`に変えて下さい。

とりあえずで作ったのでおいおい改善していきます。

### middlemanの流れ

	$ gem install middleman
	
	$ middleman init project-name
	
	$ cd project-name
	
	$ bundle install
	
	$ middleman server 

	$ middleman build

### これ使う時は
	
	$ gem install middleman
	
	$ git clone https://github.com/shuuheyhey/middleman-scss-bootstrap.git
	
	$ cd middleman-scss-bootstrap
	
	$ bundle install
	
	$ middleman server ($ middleman s でも $ middleman だけでもいける)

	$ middleman build ($ middleman b でもok)

	

[Middleman 公式サイト](http://middlemanapp.com/)

[Middleman 公式サイト 日本語版](http://middleman-guides.e2esound.com/)