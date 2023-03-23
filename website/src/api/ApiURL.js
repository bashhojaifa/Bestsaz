class ApiURL {
  static BaseURL = "http://127.0.0.1:8000/api/";
  static VisitorDetails = this.BaseURL + "GetVisitorDetails";
  static ContactDetails = this.BaseURL + "PostContactDetails";
  static SendSiteInfo = this.BaseURL + "SendSiteInfo";
  static SendCategoryDetails = this.BaseURL + "SendCategoryDetails";
  static SendSliderInfo = this.BaseURL + "SendSliderInfo";

  static ProductListByRemark(Remark) {
    return this.BaseURL + "ProductListByRemark/" + Remark;
  }

  static ProductListBySubCategory(Category, SubCategory) {
    return (
      this.BaseURL + "ProductListBySubCategory/" + Category + "/" + SubCategory
    );
  }

  static ProductListByCategory(Category) {
    return this.BaseURL + "product-list-by-category/" + Category;
  }

  static ProductDetails(ProductCode) {
    return this.BaseURL + "productDetails/" + ProductCode;
  }

  static featuredProducts = this.BaseURL + "featuredProducts";
  static specialCollection = this.BaseURL + "special_collection";
  static newArrival = this.BaseURL + "new_arrivals";

  static SuggestedProducts(subcategory) {
    return this.BaseURL + "SuggestedProducts/" + subcategory;
  }

  static notification_history = this.BaseURL + "notification_history";

  static ProductSearch(key) {
    return this.BaseURL + "ProductSearch/" + key;
  }

  static GetReview(key) {
    return this.BaseURL + "getReview/" + key;
  }

  static AddToCart = this.BaseURL + "AddToCart";

  static GetCartList(number) {
    return this.BaseURL + "GetCartList/" + number;
  }
  static CountPriceItem(number) {
    return this.BaseURL + "CountPriceItem/" + number;
  }
  static CountTotalPrice(number) {
    return this.BaseURL + "CountTotalPrice/" + number;
  }
  static DeleteItem(id) {
    return this.BaseURL + "DeleteItem/" + id;
  }
  static onAdd = this.BaseURL + "onAdd";
  static onSubtract = this.BaseURL + "onSubtract";
}

export default ApiURL;
